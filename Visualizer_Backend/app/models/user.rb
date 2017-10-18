class User < ApplicationRecord
	has_secure_password

	has_many :user_notes
	has_many :notes, through: :user_notes

end
