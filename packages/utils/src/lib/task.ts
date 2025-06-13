import type { Task as NxTask } from '@nx/devkit';

export interface Task extends NxTask {
  cacheKey?: string;
  outputs?: string[];
}
