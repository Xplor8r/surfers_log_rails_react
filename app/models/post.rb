class Post < ApplicationRecord
    belongs_to :log_entry, counter_cache: true, touch: true
    belongs_to :user
  
    validates :content, presence: true
  
    scope :sorted, ->{ order(created_at: :desc) } 
end
