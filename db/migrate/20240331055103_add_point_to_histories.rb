class AddPointToHistories < ActiveRecord::Migration[7.0]
  def change
    add_column :histories, :point, :boolean, default: false, null: false, comment: "Whether the event happened at a point of time"
  end
end
