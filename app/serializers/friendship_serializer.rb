class FriendshipSerializer < ActiveModel::Serializer
    attributes :user_id, :friend_id, :friend, :friend_slug, :confirmed
    def friend
        object.friend.name
    end
    def friend_slug
        object.friend.slug
    end
  end