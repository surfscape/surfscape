---
title: July 2025 Devlog
description: Recap of the work done throughout July on the Celer and customIcons projects.
tags: ["Devlog", "Celer", "customWin", "customIcons"]
date: 2025-08-04 01:31:00
---

**Welcome to our first devlog!**

July has been a busy month for **Celer** and **customIcons**. While both projects are being developed independently, they share something in common which is that, both are currently being ported and rewritten from the ground up. Celer is being migrated from WPF to WinUI 3, while customIcons is being ported from WinForms to WPF.

Here’s a quick recap of the progress that has been done.

## Celer: Porting to WinUI 3

The **WinUI 3 port of Celer** is still in progress and not yet on par with the last WPF release, but development is active and ongoing. This transition includes a totally new UI and involves rewritting the core of the app and making a new navigation model.

Some of the benefits that we've seen with the porting are the:

- **Modern look & feel**, thanks to the native Windows 11 design language built into WinUI 3
- Improved **performance and responsiveness**
- A cleaner, more maintainable base
- Better support for **per-monitor DPI**, **UI scaling**, and **theming**

The internal structure is also being modularised. Each feature is now developed as an independent service and module, allowing you to **choose only the components you want to use** which improves performance and gives you more control by making the app customized towards your needs.

### New Onboarding System

Celer now includes a **completely redesigned onboarding experience**, focused on control.

- Clear explanations of what the app does ([fig. 1](#figure1))
- Heavier emphasis on user customization by making all the modules and features **opt-in** ([fig. 2](#figure2))

<figure id="figure1">
  <img src="/public/images/celer/celer_onboarding1_july.png" alt="Screenshot of the first page of Celer's new onboarding process in WinUI 3" eleventy:ignore>
  <figcaption>Fig 1. First page of the onboarding with additional, opt-in, features</figcaption>
</figure>

<figure id="figure2">
  <img src="/public/images/celer/celer_onboarding2_july.png" alt="Screenshot of the second page of Celer's new onboarding process in WinUI 3" eleventy:ignore>
  <figcaption>Fig 2. Module selection that let's you customise which parts of the app you want to enable</figcaption>
</figure>

---

## customIcons: Migrating from WinForms to WPF

**customIcons**, part of the [customWin suite](/projects/customWin), was in need of a serious overhaul. Now officially under the **SurfScape** umbrella, the project is finally getting the attention it deserves.

The goals of the port:

- Move to the latest .NET platform
- Replace WinForms with WPF
- Fix some of its [issues](https://github.com/customWin/customIcons/issues)

While progress has been slow, the new UI is already complete (with **system theme support**) and the core logic for icon loading is now functional under **.NET 9**!

---

## Other Updates

- New pages for **Privacy Policy**, **Terms of Use**, and the **SurfScape Gateway** for the Celer project
- Dropped **Steel for WPF** in favour of **Fluent 2**
- Cleanup of legacy code across both projects and our main website

## Looking Ahead

In August we'll be focusing on:

- Completing the core modules in the WinUI version of Celer (maybe for a beta release 😉)
- Releasing a **preview build** of customIcons with feature parity with the old WinForms version
- Expanding the **SurfScape Gateway** service with new types of signatures
- Trying out other ways of packaging and shipping apps (NSIS, MSIX, portable)

As always thanks for following along and for your support 🥰  
More exciting stuff is coming soon so stay tuned!

~ Redux
