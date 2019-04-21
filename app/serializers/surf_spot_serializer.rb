class SurfSpotSerializer < ActiveModel::Serializer
  attributes :id, :name, :slug, :country_id
  belongs_to :country
  has_many :log_entries
end
