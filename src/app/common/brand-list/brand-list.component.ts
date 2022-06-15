import { Component, OnInit } from '@angular/core';
import { Brand } from 'src/app/models/brand';
import { BrandService } from 'src/app/services/brand.service';

@Component({
  selector: 'app-brand-list',
  templateUrl: './brand-list.component.html',
  styleUrls: ['./brand-list.component.css'],
})
export class BrandListComponent implements OnInit {
  brands: Brand[];
  constructor(private brandService: BrandService) {}

  getBrandlist() {
    this.brandService.getBrandlist().subscribe((data) => {
      this.brands = data;
    });
  }

  ngOnInit(): void {
    this.getBrandlist();
  }
  deleteBrand(val: number) {
    if (confirm('Are you sure to delete')) {
      this.brandService.deleteBrand(val).subscribe();
      location.reload();
    }
  }
}
