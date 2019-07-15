class SurfSpot < ApplicationRecord
    extend FriendlyId
    friendly_id :name, use: :slugged
    belongs_to :country
    has_many :log_entries, through: :country
    has_many :users, through: :log_entries
    
    scope :sorted, ->{order(name: :asc)}
    validates :name, :slug, presence: true
end
