import { Component } from '@angular/core';

import { UserRepositoryService } from '../core/user-repository.service';
import { CatalogRepositoryService } from './catalog-repository.service';
import { FilterClassesService } from './filter-classes.service';
@Component({
  styleUrls: ['./catalog.component.css'],
  templateUrl: './catalog.component.html'
})
export class CatalogComponent {
  classes: any[];
  visibleClasses: any[];

  constructor(
    public userRepository: UserRepositoryService,
    private catRepo: CatalogRepositoryService,
    private filterClassesService: FilterClassesService
  ) {}

  // tslint:disable-next-line:use-life-cycle-interface
  ngOnInit() {
    this.catRepo.getCatalog().subscribe(classes => {
      this.classes = classes;
      this.applyFilter('');
    });
  }

  applyFilter(filter) {
    this.visibleClasses = this.filterClassesService.filterClasses(filter, this.classes);
  }

  enroll(classToEnroll) {
    classToEnroll.processing = true;
    this.userRepository.enroll(classToEnroll.classId).subscribe(
      null,
      err => {
        console.error(err);
        classToEnroll.processing = false;
      }, // add a toast message or something
      () => {
        classToEnroll.processing = false;
        classToEnroll.enrolled = true;
      }
    );
  }

  drop(classToDrop) {
    classToDrop.processing = true;
    this.userRepository.drop(classToDrop.classId).subscribe(
      null,
      err => {
        console.error(err);
        classToDrop.processing = false;
      }, // add a toast message or something
      () => {
        classToDrop.processing = false;
        classToDrop.enrolled = false;
      }
    );
  }
}
