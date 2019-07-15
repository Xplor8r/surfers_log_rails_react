class SurfSpotSerializer < ActiveModel::Serializer
  attributes :id, :name, :slug
  belongs_to :country
  has_many :log_entries
end
