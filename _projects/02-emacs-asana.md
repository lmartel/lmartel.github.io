---
title: emacs-asana
url: http://asana.lpm.io
github: emacs-asana
date: Spring 2017
status: functional but PRs welcome
rank: 2
---
# emacs-asana

Browse and act on your My Tasks list without leaving Emacs!

![emacs-asana](emacs-asana.png)

## Dependencies

You'll need these packages, available from melpa via `M-x package-install`:
```
helm
exec-path-from-shell
```

## Getting Started

Add this to your `.bash_profile` (or wherever you keep your environment):

```bash
# Get a Personal Access Token from the `apps' tab in your app.asana.com profile settings.
export ASANA_TOKEN="<my-asana-personal-access-token>" 
```

Add this to your `init.el`:
```elisp
(global-asana-mode 1)
;; or, if you prefer, use it in specific major modes:
;; (add-hook 'org-mode-hook 'asana-mode)
;; (add-hook 'prog-mode-hook 'asana-mode)
;; (add-hook 'text-mode-hook 'asana-mode)
```

### Configuration

[Optional] The default prefix for `asana-mode` commands is `C-c a`. To change it, add this to your `init.el`:
```elisp
(setq asana-keymap-prefix "C-c C-a") ; Or whatever you'd like to use as your prefix
```

### Available commands

In the `asana-mode` minor mode, the following interactive commands are available:

```elisp
helm-asana [C-c a a]
helm-asana-change-workspace [C-c a A]

asana-create-task-quickly [C-c a c]
asana-create-task [C-c a C]
```

The `helm-asana` task list provides these actions:
```
Select (view task details in buffer) [RET]
Browse (open in Asana) [C-b]
Move to section [C-:]
Complete [C-RET]
Delete [C-DEL]
Move all marked tasks to section [M-:]
Complete all marked tasks [M-RET]
Delete all marked tasks [M-DEL]
```

## Known issues

OSX El Capitan can break `exec-path-from-shell`, which corrupts your access token as it gets imported into Emacs. See https://github.com/purcell/exec-path-from-shell/issues/41 for more details. One available workaround is to disable OSX bash sessions with `touch ~/.bash_sessions_disable`.

## TODO

- Pagination for > 100 tasks
- Improve API request batching & async around multi-select and assignee_status updates
- Improve error messages, for example around ASANA_TOKEN not found
- Improve/add docstrings
- Publish v1.0 as package
