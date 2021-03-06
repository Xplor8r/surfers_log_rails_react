class Country < ApplicationRecord
    extend FriendlyId
    friendly_id :name, use: :slugged
    has_many :log_entries
    has_many :users, through: :log_entries
    has_many :surf_spots
    
    scope :sorted, ->{order(name: :asc)}
    validates :name, :slug, presence: true
end
