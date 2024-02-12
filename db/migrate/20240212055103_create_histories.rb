class CreateHistories < ActiveRecord::Migration[7.0]
  def change
    create_table :histories do |t|
      t.date :start_on, null: false
      t.date :end_on
      t.string :content, null: false
      t.integer :type, default: 0, null: false

      t.timestamps
    end
  end
end
