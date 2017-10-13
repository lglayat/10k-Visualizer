class Api::V1::NoteSerializer < ActiveModel::Serializer
  attributes :id, :title, :doc
  
  belongs_to :user
end
