# career-ops-boards

<p align="center">
  <a href="https://github.com/career-ops-hq/career-ops"><img src="https://img.shields.io/badge/powered%20by-career--ops-blue" alt="career-ops"></a>
  <a href="https://www.npmjs.com/package/career-ops-boards"><img src="https://img.shields.io/npm/v/career-ops-boards" alt="npm"></a>
  <a href="LICENSE"><img src="https://img.shields.io/badge/license-MIT-green" alt="license"></a>
  <a href="https://github.com/career-ops-hq/career-ops-boards/actions"><img src="https://img.shields.io/github/actions/workflow/status/career-ops-hq/career-ops-boards/ci.yml" alt="CI"></a>
  <a href="https://discord.gg/example"><img src="https://img.shields.io/discord/123456789" alt="Discord"></a>
</p>

<p align="center">
  <strong>English</strong> | <a href="#chinese">中文</a>
</p>

---

## Why this project?

[career-ops](https://github.com/career-ops-hq/career-ops) revolutionized AI‑powered job hunting – scanning, scoring, and tailoring applications locally on your machine. However, its built‑in job source coverage currently centers on a few global platforms. **career-ops-boards** fills that gap by providing a pluggable, community‑driven library of scrapers (adapters) for regional and specialized job boards around the world. 

With this project you can integrate LinkedIn, BOSS Zhipin, Lagou, Indeed, and any other board into your career-ops workflow. And because it’s designed for contribution, adding a new board is as easy as writing a single adapter class.

---

<h2 id="chinese">中文</h2>

## 为什么有这个项目？

[career-ops](https://github.com/career-ops-hq/career-ops) 以 AI 驱动的方式彻底改变了求职流程——在本地自动扫描、评分、定制简历和求职信。然而其内置的职位来源目前主要集中在少数全球平台。**career-ops-boards** 通过提供一套可插拔、社区驱动的爬虫（适配器）库，填补了区域性和专业性招聘网站覆盖的空白。

通过本项目，你可以将 LinkedIn、BOSS 直聘、拉勾、Indeed 等任何招聘平台接入 career-ops 的工作流。而且项目专为贡献设计，添加新平台只需编写一个适配器类。

---

## ✨ Features | 特性

- 🧩 **Uniform adapter interface** – every board adapter implements the same simple contract.
- 🌍 **Multi‑region coverage** – adapters for LinkedIn, BOSS Zhipin, Lagou, Indeed, and growing.
- ⚡ **Powered by Playwright** – reliable, browser‑based scraping that handles modern SPAs.
- 🔌 **Pluggable into career-ops** – drop the adapters into your career-ops plugins folder and use immediately.
- 🤝 **Community‑first** – clear contribution guide, issue templates, and automated CI checks for new adapters.
- 📦 **Lightweight & ESM** – works with any Node.js 18+ project, no heavy frameworks.
- 🛠 **Extensible** – abstract base class makes creating a new adapter a matter of minutes.

## 📦 Installation | 安装

```bash
npm install career-ops-boards playwright
# or
yarn add career-ops-boards playwright
pnpm add career-ops-boards playwright
```

> **Note:** Playwright browsers need to be installed separately: `npx playwright install`

## 🚀 Quick Start | 快速上手

```typescript
import { BoardRegistry, LinkedInAdapter, BOSSAdapter } from 'career-ops-boards';

// 1. Register the adapters you want to use
const registry = new BoardRegistry();
registry.register('linkedin', LinkedInAdapter);
registry.register('boss', BOSSAdapter);

// 2. Search across boards
const linkedin = registry.create('linkedin');
const jobs = await linkedin.searchJobs('frontend developer', { location: 'remote' });

console.log(jobs.slice(0, 3)); // Array of Job objects

// 3. Use inside career-ops:
// In your career-ops config, point the board adapter to this library.
```

## 🔗 Relationship with career-ops | 与主项目的关系

This repository is a **community‑maintained ecosystem extension** for [career-ops](https://github.com/career-ops-hq/career-ops). It does **not** replace career-ops; it enhances its job source coverage. career-ops remains the central agent that orchestrates the job search, CV tailoring, interview prep, and application tracking. **career-ops-boards** simply provides the scraping adapters that career-ops can consume to reach more job listings.

Think of it as a plugin registry – career-ops is the engine, and this repo is the fuel pump that brings in diverse job feeds.

## 🗺️ Roadmap | 路线图

- [x] Core adapter interface & registry
- [x] LinkedIn adapter (basic)
- [x] BOSS Zhipin adapter (basic)
- [ ] Indeed adapter
- [ ] Lagou adapter
- [ ] Glassdoor adapter
- [ ] Community contribution CI pipeline (test + screenshot comparison)
- [ ] Dual‑language (Chinese/English) documentation
- [ ] Integration example with career-ops
- [ ] Adapter health monitoring dashboard

## 🤝 Contributing | 贡献

We welcome adapters for any job board, especially regional ones! Please see [CONTRIBUTING.md](CONTRIBUTING.md) for detailed guidelines. The process is:

1. Fork the repo.
2. Create a new adapter file in `src/adapters/` by extending `BaseAdapter`.
3. Implement the required methods.
4. Add a test and a short README for your adapter.
5. Submit a PR – our CI will help validate it.

**First‑time contributors** are welcome to claim an issue labeled `good first issue`.

## 📄 License | 许可证

MIT © career-ops-boards contributors. See [LICENSE](LICENSE) for full text.
