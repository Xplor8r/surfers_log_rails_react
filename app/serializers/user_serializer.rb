class UserSerializer < ActiveModel::Serializer
  attributes :id, :name, :slug
  has_many :log_entries
  has_many :posts
  has_many :friendships
end
