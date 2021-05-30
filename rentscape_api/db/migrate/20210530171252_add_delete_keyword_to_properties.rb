class AddDeleteKeywordToProperties < ActiveRecord::Migration[6.1]
  def change
    add_column :properties, :password_digest, :string
  end
end
