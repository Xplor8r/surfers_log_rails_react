class CountrySerializer < ActiveModel::Serializer
  attributes :id, :name, :slug
  has_many :log_entries
  has_many :surf_spots
end
