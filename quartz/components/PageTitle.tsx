import { pathToRoot } from "../util/path"
import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"
import { classNames } from "../util/lang"
import { i18n } from "../i18n"

const PageTitle: QuartzComponent = ({ fileData, cfg, displayClass }: QuartzComponentProps) => {
//  const title = cfg?.pageTitle ?? i18n(cfg.locale).propertyDefaults.title
  const title = "Life in a Glass House"
  const baseDir = pathToRoot(fileData.slug!)
  const subtitle = "My personal website"
  return (
    <h1 class={classNames(displayClass, "page-title")}>
      <a href={baseDir}>{title}</a>
      <span class="subtitle"> {subtitle}</span>
    </h1>
  )
}

PageTitle.css = `
.page-title {
  margin: 0;
}

.subtitle {
  display: block;
  margin-top: 0.5rem;
  font-family: noto sans;
  color: var(--darkgray);
  font-size: 18px;
  font-weight: normal;
}`


export default (() => PageTitle) satisfies QuartzComponentConstructor
