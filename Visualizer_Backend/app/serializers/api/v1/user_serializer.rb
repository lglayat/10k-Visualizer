class Api::V1::UserSerializer < ActiveModel::Serializer
  attributes :id, :notes

  has_many :user_notes
	has_many :notes, through: :user_notes
end
