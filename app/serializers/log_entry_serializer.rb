class LogEntrySerializer < ActiveModel::Serializer
  attributes :id, :surf_spot_id, :country_id, :created_at
  has_many :posts
  belongs_to :country
  belongs_to :surf_spot
  belongs_to :user
end
