<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.
<!-- LOVABLE:END -->

- Invitation background audio uses a native audio element with an opening playback attempt and first-gesture retry, because browsers can block audible autoplay.
- Invitation media (images, audio) is committed as real files under src/assets and imported directly, never externalized to Lovable Assets pointers, because the user deploys the app outside Lovable and external pointers would leave those files behind.
