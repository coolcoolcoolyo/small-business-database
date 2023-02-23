class CreateZipCodes < ActiveRecord::Migration[7.0]
  def change
    create_table :zip_codes do |t|
      t.integer :zip_code
      t.decimal :latitude, precision: 6, scale: 10, :default => 0 # maybe not necessary?
      t.decimal :longitude, precision: 6, scale: 10, :default => 0 # maybe not necessary?
      t.string :city
      t.string :state # acronym
      t.string :county
    end
  end
end
