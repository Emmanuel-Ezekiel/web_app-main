# Branching Strategy

## Trunk-based development

Trunk-based development is a branching strategy model that revolves around a single main "trunk" branch. The main idea is for all engineers to integrate their completed feature work as quickly as possible to avoid complex merges and ensure success of the continuous integration and continuous delivery mechanism. Because feature work merged into `trunk` may not be 100% ready for release, a "feature toggle" configuration system is often employed to ensure that only completed features are accessible in releases.

## Commits

Commit messages should be detailed and helpful—basically follow [Angular guidelines](https://gist.github.com/brianclements/841ea7bffdb01346392c) to format our commit messages.

```
<type>(<CARD_ID>): <subject>
<BLANK LINE>
<body>
```

## Example

```
feat(TIPTOPP-21): add login page
```

```
docs(TIPTOPP-22): update README
```

```
fix(TIPTOPP-23): update xxx dependency to version x.xx

the xxx issue has been fixed in version x.xx
```

> We use **"TIPTOPP"** in commit header to help link to the corresponding TRELLO card.

### Type

Must be one of the following:

- build: Changes that affect the build system or external dependencies (example scopes: gulp, broccoli, npm)
- ci: Changes to our CI configuration files and scripts (example scopes: Circle, BrowserStack, SauceLabs)
- docs: Documentation only changes
- feat: A new feature
- fix: A bug fix
- perf: A code change that improves performance
- refactor: A code change that neither fixes a bug nor adds a feature
- style: Changes that do not affect the meaning of the code (white-space, formatting, missing semi-colons, etc)
- test: Adding missing tests or correcting existing tests

&nbsp;

- chore: Anything not among types above (only used when difficult to classify)
