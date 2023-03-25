import { RequestType } from "$lib/modules/musicsearch/interfaces/musicqueryrequest.interface";
import type { Layout } from "../component.types";

export function getLayoutType(requestType: RequestType): Layout {
  switch (requestType) {
    case RequestType.Track:
      return "track-list";
    case RequestType.Artist:
      return "artist-list";
    case RequestType.Album:
    case RequestType.Release:
    default:
      return "album-grid";
  }
}

/** Dispatch event on click outside of node */
export function clickOutside(node: Node) {

  const handleClick = (event: Event) => {
    if (node && !node.contains(event.target as Node) && !event.defaultPrevented) {
      node.dispatchEvent(
        new CustomEvent('click_outside', node as CustomEventInit)
      )
    }
  }

  document.addEventListener('click', handleClick, true);

  return {
    destroy() {
      document.removeEventListener('click', handleClick, true);
    }
  }
}
