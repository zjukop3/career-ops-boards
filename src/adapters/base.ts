import type { Browser, Page } from 'playwright';

export interface Job {
  id: string;
  title: string;
  company: string;
  location?: string;
  url: string;
  postedDate?: string;
  description?: string;
  board: string;          // e.g., 'linkedin'
  rawData?: unknown;      // original data for custom processing
}

export interface SearchOptions {
  location?: string;
  limit?: number;
  [key: string]: unknown; // allow board-specific options
}

export abstract class BaseAdapter {
  /** Unique identifier for the board (lowercase, no spaces) */
  abstract readonly boardId: string;

  /** Human‑readable name of the board */
  abstract readonly boardName: string;

  /**
   * Search for jobs on this board.
   * @param query - The search query (job title, keywords).
   * @param options - Optional filters (location, limit, etc.).
   * @returns A list of Job objects.
   */
  abstract searchJobs(query: string, options?: SearchOptions): Promise<Job[]>;

  /**
   * Optional: fetch additional details for a specific job.
   * @param jobId - The board-specific job identifier.
   */
  async getJobDetails?(jobId: string): Promise<Partial<Job>>;

  /**
   * Helper to launch a new browser instance (shared across adapters).
   * Override if custom launch options are needed.
   */
  protected async launchBrowser(): Promise<Browser> {
    const { chromium } = await import('playwright');
    return chromium.launch({ headless: true });
  }

  /**
   * Helper to create a new page with common anti‑detection measures.
   */
  protected async newPage(browser: Browser): Promise<Page> {
    const context = await browser.newContext({
      userAgent:
        'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
    });
    return context.newPage();
  }
}
