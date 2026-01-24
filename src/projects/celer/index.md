---
title: Celer
description: Take back control of your Windows system
permalink: "/celer/"
hero:
  actions:
    - label: Downloads
      link: "#downloads"
      icon: lucide:chevron-down
    - label: Source Code
      link: "https://github.com/surfscape/celer"
      icon: simple:github
      type: minimal
  footer: Free as in <i>libre</i> — no telemetry. Ever.
modules:
  glightbox: true
---

Celer is SurfScape's flagship product, an open source and friendly toolbox that contains system monitoring, power tuning, and cleaning features in a single program. Designed for any type of Windows user, from casual, gamers and IT professionals.

## Screenshots

{{ imageShowcase(mainImageSrc="/public/images/celer/beta2/dashboard.png",mainImageAlt="Dashboard with real time information about the system usage",images=[
  {src:"/public/images/celer/beta2/onboarding.png",alt:"The onboarding window showing the terms of usage and quick settings that the user can opt in"},
  {src:"/public/images/celer/beta2/cleaning.png",alt:"Cleaning module showing the items that the user can choose to clean from their system as well as the log of what's happening in the right side"},
  {src:"/public/images/celer/beta2/power.png",alt:"Power manager module showing status of the battery and switching power plans"},
  {src:"/public/images/celer/beta2/opsec.png",alt:"Privacy & security module that runs a quick check on the privacy and security state of the system"}]) }}

## Main Features

<div class="auto-grid">

{{ card(title="Real Time System Monitoring", icon="activity", description="Monitor your system in real time, including CPU, GPU, RAM, battery and thermals.", type="minimal") }}
{{ card(title="Cleaning", icon="trash-2", description="Remove temporary and redundant files from the system and third party apps.", type="minimal") }}
{{ card(title="Power Management", icon="power",description="Create and switch power plans, monitor battery wear, and adjust performance or efficiency as needed.", type="minimal") }}
{{ card(title="Ethical by Design", icon="lock",description="Designed with privacy and transparency. No ads and no telemetry.", type="minimal") }}

</div>

<!-- ## Screenshots -->

## System Requirements

- Windows 10 or 11 (64-bit)
- Minimum 1 GB of available RAM \*
- Minimum 150 MB of free disk space
- [.NET Runtime 10 (x64)](https://dotnet.microsoft.com/en-us/download/dotnet/thank-you/runtime-desktop-10.0.0-windows-x64-installer) must be installed

<small>\* This metric depends on the RAM available to .NET which might reduce/increase Celer memory usage</small>

## Downloads

### Orion Public beta branch

<details>
<summary>Version 1.0.0-beta.2</summary>
<a href="https://github.com/surfscape/celer/releases/download/v1.0.0-beta.2/setup_release.exe" download>x64 Release Setup (English)</a>
</details>

<details>
<summary>Version 1.0.0-beta.1</summary>
<a href="https://github.com/surfscape/celer/releases/download/v1.0.0-beta.1/setup_debug.exe" download>x64 Portuguese - setup_debug.exe</a>
</details>
