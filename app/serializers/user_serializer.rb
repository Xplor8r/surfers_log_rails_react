class UserSerializer < ActiveModel::Serializer
  attributes :id, :name, :slug
  has_many :friendships
  has_many :log_entries
  has_many :posts
end
