import type { BaseAdapter } from './base.js';

/**
 * A simple registry that holds adapter constructors and can instantiate them.
 */
export class BoardRegistry {
  private adapters = new Map<string, new () => BaseAdapter>();

  /** Register an adapter under a name (usually the boardId). */
  register(name: string, adapterClass: new () => BaseAdapter): void {
    this.adapters.set(name.toLowerCase(), adapterClass);
  }

  /** Create a new instance of a registered adapter. */
  create(name: string): BaseAdapter {
    const Adapter = this.adapters.get(name.toLowerCase());
    if (!Adapter) {
      throw new Error(`Adapter "${name}" not registered. Available: ${[...this.adapters.keys()].join(', ')}`);
    }
    return new Adapter();
  }

  /** List all registered board IDs. */
  list(): string[] {
    return [...this.adapters.keys()];
  }
}
