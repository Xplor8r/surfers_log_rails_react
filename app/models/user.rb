class User < ApplicationRecord
    extend FriendlyId
    friendly_id :name, use: :slugged
    has_many :log_entries
    has_many :posts
    has_many :surf_spots, through: :log_entries
    has_many :countries, through: :log_entries
    validates :name, :slug, presence: true
    validates :email, presence: true, uniqueness: true

    has_secure_password
end
