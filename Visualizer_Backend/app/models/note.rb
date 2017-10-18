class Note < ApplicationRecord

  has_many :user_notes
  has_many :users, through: :user_notes

  belongs_to :category, optional: true

end
