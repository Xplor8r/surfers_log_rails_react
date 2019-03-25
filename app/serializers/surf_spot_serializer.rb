class SurfSpotSerializer < ActiveModel::Serializer
  attributes :id, :name
  has_many :log_entries
end
