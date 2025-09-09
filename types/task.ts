// types/task.ts
export interface User {
  id: string;
  name: string;
  email?: string;
  firstName?: string;
  lastName?: string;
  imageUrl?: string;
}

export interface Team {
  id: string;
  name: string;
  description?: string;
  created_at?: string;
  updated_at?: string;
}

export interface Project {
  id: string;
  name: string;
  description?: string;
  team_id?: string;
  created_at?: string;
  updated_at?: string;
}

export interface TaskAssignee {
  id: string;
  task_id: string;
  user_id: string;
  assigned_at?: string;
  // For joined data
  name?: string;
  firstName?: string;
  lastName?: string;
}

export interface Subtask {
  id: string;
  title: string;
  completed: boolean;
}

export interface ChecklistItem {
  id: string;
  text: string;
  checked: boolean;
}

export interface TaskDependency {
  id: string;
  dependsOnTaskId: string;
}

export interface Space {
  id: string;
  name: string;
  description?: string;
}

export interface Folder {
  id: string;
  name: string;
  space_id: string;
  description?: string;
}

export interface List {
  id: string;
  name: string;
  folder_id: string;
  description?: string;
}

export interface Task {
  id: string;
  title: string;
  description?: string;
  status: 'todo' | 'in_progress' | 'done' | 'blocked';
  priority: 'low' | 'normal' | 'high' | 'urgent';
  due_date?: string;
  project_id?: string;
  team_id?: string;
  space_id?: string;
  folder_id?: string;
  list_id?: string;
  created_by: string;
  created_at: string;
  updated_at: string;
  
  // Relationships
  assignees?: TaskAssignee[];
  project?: Project;
  team?: Team;
  creator?: User;
  // New features
  subtasks?: Subtask[];
  checklist?: ChecklistItem[];
  dependencies?: TaskDependency[];
}

export interface CreateTaskData {
  title: string;
  description?: string;
  status?: Task['status'];
  priority?: Task['priority'];
  due_date?: string;
  project_id?: string;
  team_id?: string;
  assignees?: string[];
}

export interface UpdateTaskData extends Partial<CreateTaskData> {
  id: string;
}