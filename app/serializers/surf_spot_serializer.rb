class SurfSpotSerializer < ActiveModel::Serializer
  attributes :id, :name
  belongs_to :country
  has_many :log_entries
end
