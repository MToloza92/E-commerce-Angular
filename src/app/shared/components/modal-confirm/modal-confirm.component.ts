import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-modal-confirm',
  standalone: true,
  imports: [MatCardModule, MatButtonModule, MatDialogModule],
  template: `
    <mat-card>
      <mat-card-content>
        <p>{{ data.mensaje }}</p>
      </mat-card-content>
      <mat-card-actions>
        <button mat-raised-button color="primary" (click)="cerrar()">
          {{ data.btnNombre }}
        </button>
      </mat-card-actions>
    </mat-card>
  `
})
export class ModalConfirmComponent {
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: { mensaje: string, btnNombre: string },
    private dialogRef: MatDialogRef<ModalConfirmComponent>
  ) {}

  cerrar() {
    this.dialogRef.close();
  }
}
