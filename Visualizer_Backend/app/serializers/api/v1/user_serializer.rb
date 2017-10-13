class Api::V1::UserSerializer < ActiveModel::Serializer
  attributes :id, :notes

  has_many :notes
end
