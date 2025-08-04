---
title: Celer Services Information
description: General information about Celer's included services and how they work
hero:
  footer: "Last revision: 02/08/2025"
---

## Overview

Celer is a system utility designed to work primarily offline. However, to improve the user experience and provide access to updated data without requiring new releases of the app, certain services are available that may require internet access.

This page outlines the services included in Celer, how they function, how they interact with your system, and the control you have over them.

---

## Local Services

These components are integrated into Celer through its **Module Engine** and run entirely offline:

### Cleaning Engine

The Cleaning Engine removes temporary, residual, or unnecessary files based on a set of dynamic signatures.

- **Requires an initial internet connection to fetch cleaning signatures**
- Signatures are downloaded from the [SurfScape Gateway](#-surfscape-gateway)
- Once downloaded, they are **cached locally** for offline use

If **no connection is available**, Celer will **use the most recent local copy**.

Celer **does not include built-in cleaning signatures** by default. The user must fetch them manually or enable automatic updates during the onboarding process or through the app settings.

### Opsec Module

Celer uses the built-in **Microsoft Defender PowerShell module** to inspect system protection status. This happens **entirely offline** and requires no external communication.

- No third-party tools are used
- No external reporting or data collection occurs

---

## Online Services

These components require internet access and are **optional** (opt-in):

### SurfScape Gateway

The **SurfScape Gateway** is a lightweight web service that provides:

- **Updated cleaning signatures** (e.g., for browsers, apps, system paths)
- **Updated group policy definitions** (used in Privacy & Optimization modules)
- **Metadata** for services, categories, and cleanup items
- **Informational messages**, such as new updates or important notices

When enabled, Celer connects to the Gateway to retrieve updated files. This process is transparent and does **not** upload any data from your device.

The Gateway can run at startup (if enabled during onboarding or via settings), or manually through the cleaning module or app settings.

#### How it works:

1. Celer downloads a JSON file from the Gateway.
2. The file is saved and parsed locally.
3. **No data is sent back** to the server.

You can enable or disable this service during onboarding or at any time via the app’s settings. The Cleaning module also supports **offline mode** if a valid signature file is present locally or provided manually (this option can be enabled under the Cleaning > Advanced section in settings).

---

## Feature Summary

<div class="steel-table">

| Service           | Required for Core Features | Works Offline | Requires Internet | Opt-in |
| ----------------- | -------------------------- | ------------- | ----------------- | ------ |
| Cleaning Engine   | ❌                         | ✅ (cached)   | ✅ (initially)    | ✅     |
| SurfScape Gateway | ❌                         | ❌            | ✅                | ✅     |
| Opsec Module      | ❌                         | ✅            | ❌                | ✅     |

</div>

---

## Key Takeaways

- All services are **privacy-focused** and designed to minimize external dependencies.
- **No personal data** is transmitted or collected.
- Internet access is used **only if explicitly enabled**.
- You are in **full control** of what services are active.

For more details, see our [Privacy Policy](../privacy) and [Terms of Use](../terms).
