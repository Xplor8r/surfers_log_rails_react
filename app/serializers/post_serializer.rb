class PostSerializer < ActiveModel::Serializer
  attributes :id, :content, :created_at, :log_entry_id
  belongs_to :user
  belongs_to :log_entry_id
end
