export interface Todo {
  id: number;
  title: string;
	completed: boolean;
}

export interface TodoItemProps {
	todo: Todo
	onDelete: (id: number) => void
	onToggle: (id: number) => void
}

export interface TodoFormProps {
	onAddTodo: (todo: string) => void
}

