class User < ApplicationRecord
    extend FriendlyId
    friendly_id :name, use: :slugged
    has_many :log_entries
    has_many :posts
    has_many :surf_spots, through: :log_entries
    has_many :countries, through: :log_entries
    has_many :friendships
    has_many :inverse_friendships, :class_name => "Friendship", :foreign_key => "friend_id"
    
    validates :name, :slug, presence: true
    validates :email, presence: true, uniqueness: true

    has_secure_password
    scope :sorted, ->{order(name: :asc)}

    def friends
      friends_array = friendships.map{|friendship| friendship.friend if friendship.confirmed}
      friends_array + inverse_friendships.map{|friendship| friendship.user if friendship.confirmed}
      friends_array.compact
    end
  
    def pending_friends
      friendships.map{|friendship| friendship.friend if !friendship.confirmed}.compact
    end
  
    def friend_requests
      inverse_friendships.map{|friendship| friendship.user if !friendship.confirmed}.compact
    end
  
    def confirm_friend(user)
      friendship = inverse_friendships.find{|friendship| friendship.user == user}
      friendship.confirmed = true
      friendship.save
    end
  
    def friend?(user)
      friends.include?(user)
    end
end
