import { FilterOrganization } from "./filter-organization";
import { FilterTypes } from "./filter-types";


export function FilterBar() {

  return (
    <section className="max-w-screen-main mx-auto px-2 pt-9">
      <div className="flex items-center justify-between">
        <FilterTypes />
        <FilterOrganization />
      </div>
    </section>
  )
}