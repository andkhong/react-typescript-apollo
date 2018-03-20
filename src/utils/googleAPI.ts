export function injectGoogleMaps(api: string): void {
  const script = document.createElement('script');
  script.async = true;
  script.defer = true;
  script.src = `https://maps.googleapis.com/maps/api/js?key=${api}`;
  document.head.appendChild(script);
}
