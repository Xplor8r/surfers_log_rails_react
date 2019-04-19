class CountrySerializer < ActiveModel::Serializer
  attributes :id, :name, :slug
  has_many :log_entries
end
