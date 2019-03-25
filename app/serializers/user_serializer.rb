class UserSerializer < ActiveModel::Serializer
  attributes :id, :name
  has_many :log_entries
  has_many :posts
end
