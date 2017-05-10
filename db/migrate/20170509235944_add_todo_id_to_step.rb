class AddTodoIdToStep < ActiveRecord::Migration[5.0]
  def change
    add_column :steps, :todo_id, :integer
  end
end
