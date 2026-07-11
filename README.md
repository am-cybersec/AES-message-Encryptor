# 🔐 IP Blacklist & Port Threat Scanner

A desktop GUI tool (built with Python + Tkinter) that scans an IP address and a list of open ports against known blacklists using **binary search** for fast lookups. Built as a cybersecurity/DSA portfolio project to demonstrate applying core algorithms (binary search) to a practical security use case.

## Features

- 🌐 **IP Blacklist Check** — Converts IPv4 addresses into 32-bit integers and binary-searches them against a sorted blacklist of known malicious IPs.
- 🚪 **Risky Port Detection** — Checks a comma-separated list of open ports against a sorted list of commonly exploited/high-risk ports (FTP, SSH, RDP, SMB, MySQL, Redis, etc.).
- ⚡ **Binary Search Engine** — Both lookups run in O(log n) time, with live comparison counts shown for each check (great for demonstrating algorithm efficiency).
- 🖥️ **Terminal-style UI** — Dark hacker-themed interface with color-coded output (green = safe, red = threat, yellow/blue = info).
- 🧪 **Quick Test Buttons** — One-click buttons to try a known blacklisted IP or a clean IP.

## How It Works

1. **Port lookup**: Ports are pre-sorted; `binary_search_port()` does a standard binary search over the sorted list.
2. **IP lookup**: Each IP is converted to a 32-bit binary integer (`ip_to_int()`), the blacklist is converted the same way, then `binary_search_ip()` searches the sorted integer list.
3. **Scan flow**: `check_scan_data()` runs the IP check once and a port check for every entered port, returning results with flag status + number of comparisons used.

## Tech Stack

- **Python 3**
- **Tkinter** (`tk`, `ttk`, `scrolledtext`) — GUI
- Core DSA concept: **Binary Search**

## Run It

```bash
python threat_checker.py
```

No external dependencies — pure Python standard library.

## Example

- Try **Blacklisted IP** → `45.33.32.156` with ports `22, 3389, 445` → flags IP + all 3 ports as high risk.
- Try **Clean IP** → `127.0.0.1` with ports `80, 443, 8080` → mostly clean (8080 still flagged as risky).

## Possible Improvements

- Load blacklist/risky ports from an external file or live threat-intel feed.
- Add CIDR range blacklist support.
- Export scan report as PDF/log file.
- Add real port scanning (via `socket`) instead of manual entry.

## Author

Built by Areeba Minahil as part of an Information Security coursework portfolio project.