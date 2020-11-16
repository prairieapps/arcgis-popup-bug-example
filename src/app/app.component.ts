import { Component, ElementRef, ViewChild } from '@angular/core';
import esri = __esri;
import { loadModules } from 'esri-loader';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  map: esri.Map;
  sceneView: esri.SceneView;

  @ViewChild('map', { static: false }) mapEl: ElementRef;

  constructor() {
    this.initializeMap()
  }

  async initializeMap() {

    const [EsriMap, EsriSceneView] = await loadModules(['esri/Map', 'esri/views/SceneView']);

    this.map = new EsriMap({
      basemap: 'hybrid',
      ground: 'world-elevation'
    });

    const viewProperties: esri.SceneViewProperties = {
      container: this.mapEl.nativeElement,
      map: this.map
    };

    this.sceneView = new EsriSceneView(viewProperties);
  }
}