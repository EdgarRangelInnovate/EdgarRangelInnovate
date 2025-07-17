# Semantic Commit Messages with Emojis

This document describes the recommended format and structure for using emojis in commit messages, aimed at enhancing the readability and organization of change history in a project.

---

## Commit Format

Use the following format for your commit messages:

`<emoji_type> <commit_type>(<scope>): <subject>. <issue_reference>`

### Example

![semantic structure](./assets/commit.png)

**The commit message will be:**

> feat: Add a new feature

**With optional features like emoji, scope, and issue reference:**

> :sparkles: feat(Component): Add a new feature. Closes: #123

## Supported Emojis by Commit Message Types

| Type     | Emoji                                           |
| -------- | ----------------------------------------------- |
| feat     | :sparkles: `:sparkles:`                         |
| fix      | :bug: `:bug:`                                   |
| docs     | :memo: `:memo:`                                 |
| refactor | :recycle: `:recycle:`                           |
| build    | :construction_worker: `:construction_worker:`   |
| test     | :white_check_mark: `:white_check_mark:`         |
| ci       | :green_heart: `:green_heart:`                   |
| style    | :art: `:art:`                                   |
| chore    | :wrench: `:wrench:`                             |
| perf     | :zap: `:zap:`                                   |

In addition to these emojis, other related emojis can also be used in commit messages. For example:

:construction_worker: build(Electron): Bump version 7 to 9 :arrow_up:
> :construction_worker: build(Electron): Bump version 7 to 9 :arrow_up:

## Commit Message Types

| Type          | Description                                      |
| --------------| ------------------------------------------------ |
| breaking      | Changes that break compatibility                 |
| bugfix        | Bug fixes                                        |
| build/conf    | Changes in the build system                      |
| chore         | Minor updates (no production code changes)      |
| ci            | Changes related to continuous integration        |
| deprecation   | Changes related to deprecation                   |
| docs          | Adding or updating documentation                 |
| downgrade     | Changes related to a downgrade                   |
| enhancement   | Changes related to enhancements                   |
| feat          | Introducing a new feature to the codebase       |
| fix           | Fixing a bug in the codebase                     |
| hotfix        | Urgent fixes                                     |
| i18n          | Changes related to internationalization          |
| init          | First commit (initial)                           |
| major         | Significant changes                              |
| migration     | Changes related to migrations                     |
| minor         | Minor changes                                    |
| other         | Changes that do not fit into the previous categories |
| patch         | Changes related to patches                        |
| perf          | Backward-compatible performance improvements      |
| refactor      | Refactoring production code                       |
| release       | Changes related to a release                      |
| removal       | Removing features                                 |
| revert        | Reverting a previous commit                       |
| security      | Changes related to security                       |
| style         | Improving structure/format of the code           |
| test          | Adding tests                                     |
| update        | Changes related to updates                        |
| upgrade       | Changes related to upgrades                       |
| wip           | Work in progress                                 |

## Commit Summary Suggestions

- Use `Added` for new features.
- Use `Changed` for changes in existing functionality.
- Use `Deprecated` for features that will be removed soon.
- Use `Removed` for features that have been removed.
- Use `Fixed` for any bug fixes.
- Use `Security` in case of vulnerabilities.

## Issue Referencing

You can close a related issue with the commit using the following keywords:

- close
- closes
- closed
- fix
- fixes
- fixed
- resolve
- resolves
- resolved

For example, you can use the phrase: Fixes: #1 or Fixes #1. Once the branch is merged into the main branch, the issue will be closed automatically.

## Jira Issue Referencing

When referencing a Jira issue, include the Jira ticket number in the commit message. This can be done similarly to issue tracking systems. Use a format like this:

`<emoji_type> <commit_type>(<scope>): <subject> (JIRA-123)`

**Example:**

:sparkles: feat(Component): Add a new feature (JIRA-123)

This helps in tracking development tasks in both Git and Jira simultaneously, providing clarity on what changes relate to which Jira tasks.

## References

- [Gitmoji](https://gitmoji.dev/)
- [Cbeams](https://cbea.ms/git-commit/)
- [Karma](http://karma-runner.github.io/1.0/dev/git-commit-msg.html)
- [Platzi](https://platzi.com/tutoriales/1557-git-github/6359-gitmoji-integrar-emojis-a-nuestros-commit/)

---

[⏪ Regresar a software](../../software/README.md) | [⏫ Subir un nivel](../README.md) | [⏩ Avanzar a pre-commit](./pre-commit.md)
