class LogEntrySerializer < ActiveModel::Serializer
  attributes :id,
    :date,
    :swell_direction,
    :swell_size,
    :conditions,
    :wave_count,
    :image_url,
    :country_id,
    :surf_spot_id
  has_many :posts
  belongs_to :country
  belongs_to :surf_spot
  belongs_to :user
end
