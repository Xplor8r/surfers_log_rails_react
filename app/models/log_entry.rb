class LogEntry < ApplicationRecord
    extend FriendlyId
    friendly_id :surf_spot, use: :slugged
    belongs_to :surf_spot
    belongs_to :country
    belongs_to :user
    has_many :posts
    has_many :users, through: :posts

    accepts_nested_attributes_for :posts
  
    validates :country, presence: true
    validates :user_id, :surf_spot, presence: true
    validates_associated :posts
 
    scope :sorted, ->{order(created_at: :desc)}
end
