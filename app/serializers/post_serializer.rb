class PostSerializer < ActiveModel::Serializer
  attributes :id, :content, :user, :log_entry_id, :created_at
  belongs_to :user
  belongs_to :Log_entry
end
