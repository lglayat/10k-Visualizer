class Api::V1::NoteSerializer < ActiveModel::Serializer
  attributes :id, :title, :doc

  has_many :user_notes
  has_many :users, through: :user_notes

end
