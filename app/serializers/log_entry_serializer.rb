class LogEntrySerializer < ActiveModel::Serializer
  attributes :id,
    :date,
    :time,
    :swell_1_size,
    :swell_1_direction,
    :swell_2_size,
    :swell_2_direction,
    :swell_3_size,
    :swell_3_direction,
    :wind_speed,
    :wind_direction,
    :wave_count,
    :image_url,
    :country_id,
    :surf_spot_id
  has_many :posts
  belongs_to :country
  belongs_to :surf_spot
  belongs_to :user
end
